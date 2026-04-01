import { NextRequest, NextResponse } from "next/server"
import { google } from "googleapis"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { service, vehicle, date, time, name, phone, email, address } = body

    // Validate required fields
    if (!service || !vehicle || !date || !time || !name || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Google Sheets credentials
    // Service account: maxdetailing@detailing-booking.iam.gserviceaccount.com
    // Sheet ID: 1XDMeLty0xKzpv-26AdlUi4av-IciCrPqCrk1Stt7_-8
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL || "maxdetailing@detailing-booking.iam.gserviceaccount.com"
    
    // Replace literal "\n" in your env variable with actual newlines
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
    
    const sheetId = process.env.GOOGLE_SHEET_ID || "1XDMeLty0xKzpv-26AdlUi4av-IciCrPqCrk1Stt7_-8"

    if (!privateKey) {
      // Log the booking to console for development/fallback
      console.log("[v0] New booking received (Google Sheets private key not configured):", {
        timestamp: new Date().toISOString(),
        name,
        phone,
        email: email || "",
        address: address || "",
        service,
        vehicle,
        date,
        time,
      })
      
      // Return success with a note about manual confirmation
      return NextResponse.json({ 
        success: true, 
        message: "Booking received. We will confirm via phone within 24 hours." 
      })
    }

    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })

    // Format the date
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    })

    // Append row to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:I",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(), // Timestamp
            name,
            phone,
            email || "",
            address || "",
            service,
            vehicle,
            formattedDate,
            time,
          ],
        ],
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Booking error:", error)
    return NextResponse.json(
      { error: "Failed to process booking" },
      { status: 500 }
    )
  }
}
