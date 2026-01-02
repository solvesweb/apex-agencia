import type { Player } from '../types/Player';

export const players: Player[] = [
    // === ORIGINALES (sin cambios) ===

    // Delantero
    {
        name: 'Mateo Varela',
        club: 'Valencia CF',
        clubId: '1775',
        nationality: 'España',
        countryCode: 'es',
        positionKey: 'forward',
        birthDate: '2001-03-15',
        image: '/images/players/mateo-varela.png',
        slug: 'mateo-varela',
        bioKey: 'playerBios.mateo-varela'
    },

    // Centrocampista
    {
        name: 'Lucas Mendoza',
        club: 'Villarreal B',
        clubId: '1777',
        nationality: 'España',
        countryCode: 'es',
        positionKey: 'midfielder',
        birthDate: '2003-07-22',
        image: '/images/players/lucas-mendoza.png',
        slug: 'lucas-mendoza',
        bioKey: 'playerBios.lucas-mendoza'
    },

    // Defensa
    {
        name: 'Diego Ramírez',
        club: 'Real Madrid Castilla',
        clubId: '1736',
        nationality: 'España',
        countryCode: 'es',
        positionKey: 'defender',
        birthDate: '2002-11-08',
        image: '/images/players/diego-ramirez.png',
        slug: 'diego-ramirez',
        bioKey: 'playerBios.diego-ramirez'
    },

    // Portero
    {
        name: 'Adrián Torres',
        club: 'Valencia Mestalla',
        clubId: '1775',
        nationality: 'España',
        countryCode: 'es',
        positionKey: 'goalkeeper',
        birthDate: '2000-05-19',
        image: '/images/players/adrian-torres.png',
        slug: 'adrian-torres',
        bioKey: 'playerBios.adrian-torres'
    },

    // === NUEVOS (modificados) ===

    // Delanteros
    {
        name: 'Marcus Johnson',
        club: 'Arsenal FC',
        clubId: '602',
        nationality: 'Inglaterra',
        countryCode: 'gb',
        positionKey: 'forward',
        birthDate: '2002-06-14',
        image: '/images/players/marcus-johnson.png',
        slug: 'marcus-johnson',
        bioKey: 'playerBios.marcus-johnson'
    },
    {
        name: 'Gabriel Santos',
        club: 'Inter Milan',
        clubId: '1135',
        nationality: 'Brasil',
        countryCode: 'br',
        positionKey: 'forward',
        birthDate: '2001-09-28',
        image: '/images/players/gabriel-santos.png',
        slug: 'gabriel-santos',
        bioKey: 'playerBios.gabriel-santos'
    },

    // Centrocampistas
    {
        name: 'Thomas Müller Jr',
        club: 'Borussia Dortmund',
        clubId: '907',
        nationality: 'Alemania',
        countryCode: 'de',
        positionKey: 'midfielder',
        birthDate: '2003-03-11',
        image: '/images/players/thomas-muller.png',
        slug: 'thomas-muller-jr',
        bioKey: 'playerBios.thomas-muller-jr'
    },
    {
        name: 'Antoine Dubois',
        club: 'Paris Saint-Germain',
        clubId: '868',
        nationality: 'Francia',
        countryCode: 'fr',
        positionKey: 'midfielder',
        birthDate: '2002-11-22',
        image: '/images/players/antoine-dubois.png',
        slug: 'antoine-dubois',
        bioKey: 'playerBios.antoine-dubois'
    },

    // Defensas
    {
        name: 'Luca Rossi',
        club: 'AC Milan',
        clubId: '1099',
        nationality: 'Italia',
        countryCode: 'it',
        positionKey: 'defender',
        birthDate: '2000-07-19',
        image: '/images/players/luca-rossi.png',
        slug: 'luca-rossi',
        bioKey: 'playerBios.luca-rossi'
    },
    {
        name: 'Mateo Fernández',
        club: 'FC Barcelona',
        clubId: '1708',
        nationality: 'Argentina',
        countryCode: 'ar',
        positionKey: 'defender',
        birthDate: '2001-12-05',
        image: '/images/players/mateo-fernandez.png',
        slug: 'mateo-fernandez',
        bioKey: 'playerBios.mateo-fernandez'
    },

    // Porteros
    {
        name: 'James Mitchell',
        club: 'Manchester City',
        clubId: '679',
        nationality: 'Inglaterra',
        countryCode: 'gb',
        positionKey: 'goalkeeper',
        birthDate: '2002-04-08',
        image: '/images/players/james-mitchell.png',
        slug: 'james-mitchell',
        bioKey: 'playerBios.james-mitchell'
    },
    {
        name: 'Leon Schmidt',
        club: 'Bayern Munich',
        clubId: '915',
        nationality: 'Alemania',
        countryCode: 'de',
        positionKey: 'goalkeeper',
        birthDate: '2001-08-17',
        image: '/images/players/leon-schmidt.png',
        slug: 'leon-schmidt',
        bioKey: 'playerBios.leon-schmidt'
    },
];