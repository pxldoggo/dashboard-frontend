import { google } from "googleapis";

const jwt = new google.auth.JWT({
  email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
  key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Use the JWT to authenticate the sheets API
export async function getSheetsData() {
  const sheets = google.sheets({ version: "v4", auth: jwt });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: "Address", // Update this to the desired range
  });
  const rows = response.data.values;
  console.log(rows); // Outputs the rows from the sheet
}
