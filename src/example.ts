import { getGames } from './index';
import { EpicGamesInterface } from './interfaces/epic-games.interface';

async function main() {
    try {
        console.log('Fetching free games from Epic Games Store...');
        
        // Get games for US (you can change this country code)
        const games = await getGames('US');
        
        if (games.length > 0) {
            console.log(`Found ${games.length} free game(s):`);
            games.forEach((game: EpicGamesInterface["games"], index: number) => {
                console.log(`\n${index + 1}. ${game.title}`);
                console.log(`   Description: ${game.description}`);
                console.log(`   Image: ${game.mainImage}`);
                console.log(`   URL Slug: ${game.urlSlug}`);
            });
        } else {
            console.log('No free games available at the moment.');
        }
    } catch (error) {
        console.error('Error fetching games:', error);
    }
}

// Run the main function if this file is executed directly
if (require.main === module) {
    main();
}
