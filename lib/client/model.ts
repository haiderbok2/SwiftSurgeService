interface User {
    uuid: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    birthDate: string;
    coords: Coordinates;
    createdAt: string;
    bio?: string;
    displayStatus: DisplayStatus;
    profilePicture: string;
    images?: string[];
}

interface Coordinates {
    longitude: number;
    latitude: number;
}

enum DisplayStatus {
    ONLINE = "online",
    OFFLINE = "offline"
}