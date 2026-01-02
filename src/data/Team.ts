// src/data/team.ts
import type { TeamMember } from '../types/TeamMember';

export const team: TeamMember[] = [
    {
        name: 'Carlos Mendoza',
        roleKey: 'ceo',
        image: '/images/team/ceo.jpg',
        slug: 'carlos-mendoza'
    },
    {
        name: 'Sofia Ramírez',
        roleKey: 'agent',
        image: '/images/team/agent.jpg',
        slug: 'sofia-ramirez'
    },
    {
        name: 'David Torres',
        roleKey: 'lawyer',
        image: '/images/team/lawyer.jpg',
        slug: 'david-torres'
    },
    {
        name: 'Ana Martínez',
        roleKey: 'scout',
        image: '/images/team/scout.jpg',
        slug: 'ana-martinez'
    }
];