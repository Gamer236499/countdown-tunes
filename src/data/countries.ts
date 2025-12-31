export interface Country {
  name: string;
  timezone: string;
  flag: string;
  offset: number; // UTC offset in hours
}

export const countries: Country[] = [
  { name: "New Zealand", timezone: "Pacific/Auckland", flag: "🇳🇿", offset: 13 },
  { name: "Fiji", timezone: "Pacific/Fiji", flag: "🇫🇯", offset: 12 },
  { name: "Australia (Sydney)", timezone: "Australia/Sydney", flag: "🇦🇺", offset: 11 },
  { name: "Japan", timezone: "Asia/Tokyo", flag: "🇯🇵", offset: 9 },
  { name: "South Korea", timezone: "Asia/Seoul", flag: "🇰🇷", offset: 9 },
  { name: "China", timezone: "Asia/Shanghai", flag: "🇨🇳", offset: 8 },
  { name: "Singapore", timezone: "Asia/Singapore", flag: "🇸🇬", offset: 8 },
  { name: "Philippines", timezone: "Asia/Manila", flag: "🇵🇭", offset: 8 },
  { name: "Thailand", timezone: "Asia/Bangkok", flag: "🇹🇭", offset: 7 },
  { name: "Vietnam", timezone: "Asia/Ho_Chi_Minh", flag: "🇻🇳", offset: 7 },
  { name: "India", timezone: "Asia/Kolkata", flag: "🇮🇳", offset: 5.5 },
  { name: "UAE", timezone: "Asia/Dubai", flag: "🇦🇪", offset: 4 },
  { name: "Russia (Moscow)", timezone: "Europe/Moscow", flag: "🇷🇺", offset: 3 },
  { name: "Saudi Arabia", timezone: "Asia/Riyadh", flag: "🇸🇦", offset: 3 },
  { name: "Turkey", timezone: "Europe/Istanbul", flag: "🇹🇷", offset: 3 },
  { name: "Greece", timezone: "Europe/Athens", flag: "🇬🇷", offset: 2 },
  { name: "Bulgaria", timezone: "Europe/Sofia", flag: "🇧🇬", offset: 2 },
  { name: "South Africa", timezone: "Africa/Johannesburg", flag: "🇿🇦", offset: 2 },
  { name: "Germany", timezone: "Europe/Berlin", flag: "🇩🇪", offset: 1 },
  { name: "France", timezone: "Europe/Paris", flag: "🇫🇷", offset: 1 },
  { name: "Spain", timezone: "Europe/Madrid", flag: "🇪🇸", offset: 1 },
  { name: "Italy", timezone: "Europe/Rome", flag: "🇮🇹", offset: 1 },
  { name: "Netherlands", timezone: "Europe/Amsterdam", flag: "🇳🇱", offset: 1 },
  { name: "UK", timezone: "Europe/London", flag: "🇬🇧", offset: 0 },
  { name: "Portugal", timezone: "Europe/Lisbon", flag: "🇵🇹", offset: 0 },
  { name: "Iceland", timezone: "Atlantic/Reykjavik", flag: "🇮🇸", offset: 0 },
  { name: "Brazil (São Paulo)", timezone: "America/Sao_Paulo", flag: "🇧🇷", offset: -3 },
  { name: "Argentina", timezone: "America/Buenos_Aires", flag: "🇦🇷", offset: -3 },
  { name: "Canada (Toronto)", timezone: "America/Toronto", flag: "🇨🇦", offset: -5 },
  { name: "USA (New York)", timezone: "America/New_York", flag: "🇺🇸", offset: -5 },
  { name: "Colombia", timezone: "America/Bogota", flag: "🇨🇴", offset: -5 },
  { name: "Mexico", timezone: "America/Mexico_City", flag: "🇲🇽", offset: -6 },
  { name: "USA (Chicago)", timezone: "America/Chicago", flag: "🇺🇸", offset: -6 },
  { name: "USA (Denver)", timezone: "America/Denver", flag: "🇺🇸", offset: -7 },
  { name: "USA (Los Angeles)", timezone: "America/Los_Angeles", flag: "🇺🇸", offset: -8 },
  { name: "Alaska", timezone: "America/Anchorage", flag: "🇺🇸", offset: -9 },
  { name: "Hawaii", timezone: "Pacific/Honolulu", flag: "🇺🇸", offset: -10 },
  { name: "Samoa", timezone: "Pacific/Samoa", flag: "🇼🇸", offset: -11 },
];

// Sort by offset descending (first to celebrate New Year)
export const sortedCountries = [...countries].sort((a, b) => b.offset - a.offset);
