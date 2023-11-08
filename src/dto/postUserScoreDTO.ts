export interface PostUserGameRequestDTO {
    userId: string;
    songName: string[];
    songURL: string[];
    userAtPosition: string[];
    userScore: number;
}

export interface PostUserGameResponseDTO {
    userId: string;
    songName: string[];
    songURL: string[];
    userAtPosition: string[];
    userScore: number;
}

const postUserHighScore = async (request: PostUserGameRequestDTO): Promise<PostUserGameResponseDTO> => {
    const apiUrl = "http://localhost:8080/api/v1/musicquiz/game";

    const response = await fetch(apiUrl, {
        method: 'POST',
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

export default postUserHighScore;