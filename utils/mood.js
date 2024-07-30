import { moods } from "@/constant/moods"

export const getMood = (route) => {
    const list = moods

    const mood = list.find((x) => x.mood == route)
    if (!mood) {
        return false
    }

    return mood
}