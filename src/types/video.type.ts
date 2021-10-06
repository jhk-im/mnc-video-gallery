export default interface VideoType {
    code: number;
    message: string;
    data: {
        id: number;
        viewCount: number;
        likeCount: number;
        myLike: boolean;
        title: string;
        description: string;
        regDate: string;
        videoType: number;
        playUrl: string;
        mc: {
            id: number;
            name: string;
            profile: string;
        };
        timeCode: {
            time: string;
            title: string;
        }[];
        keywords: string[];
        userDuration: number;
        warning: string;
        banner: string;
    };
}