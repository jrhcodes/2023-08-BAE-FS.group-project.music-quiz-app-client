export interface PostUserGameRequestDTO {
    userId: string;
    songNames: string[];
    songURL: string[];
    userTimeTaken: number;
}

export interface PostUserGameResponseDTO {
    userId: string;
    correctSongNames: string[];
    correctSongURL: string[];
    userAtPosition: string[];
    userScore: number;
}

const putUserHighScore = async (request: PostUserGameRequestDTO): Promise<PostUserGameResponseDTO> => {
    const apiUrl = `http://localhost:8080/api/v1/musicquiz/game"`;

    const response = await fetch(apiUrl, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(request),
    });

    if (!response.ok) {
        console.log("LOG:", response);
        throw new Error(`Network response was not ok. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
};

export default putUserHighScore;