export default interface VideoListType {
    code: number;
    message: string;
    data: {
        page: number;
        count: number;
        totalRows: number;
        vods: {
            id: number;
            title: string;
            regDate: string;
            viewCnt: number;
            likeCnt: number;
            playURL: string;
            thumbnail: string;
            mediaKey: string;
            category: {
                id: number;
                category: string;
            };
        }[];
        categories: {
            name: string;
            id: number;
            count: number;
        }[];
    };
}