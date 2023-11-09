import fetchDTO from './fetchDTO';

export interface GetGameResponseDTO { 
    songName: string[];
    songURL: string[];
    songArtist: string[];
    songArtistForSelection: string[];
}

const gameUrl = "http://localhost:8080/api/v1/musicquiz/game?numberOfSongs=12";

const getGame = async (): Promise<GetGameResponseDTO> => fetchDTO(gameUrl);

export default getGame;