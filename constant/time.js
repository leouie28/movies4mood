export const minutesToHours = (minutes) => {
        // Calculate the number of hours
    const hours = Math.floor(minutes / 60);
    
    // Calculate the remaining minutes
    const remainingMinutes = minutes % 60;
    
    // Pad single-digit minutes with a leading zero
    const formattedMinutes = remainingMinutes.toString().padStart(2, '0');
    
    // Return the formatted time string
    return `${hours}h ${formattedMinutes}min`;
}