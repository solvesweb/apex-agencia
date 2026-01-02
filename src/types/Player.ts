export interface Player {
    name: string;
    club: string;
    clubId: string;
    nationality: string;
    countryCode: string;
    positionKey: 'forward' | 'midfielder' | 'defender' | 'goalkeeper';
    birthDate: string;
    image: string;
    slug: string;
    bioKey: string; // Nuevo campo para traducción de bio
}