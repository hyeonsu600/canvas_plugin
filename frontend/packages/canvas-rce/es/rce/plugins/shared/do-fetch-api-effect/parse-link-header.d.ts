type LinkInfo = {
    [key: string]: string;
};
type Links = {
    first?: LinkInfo;
    prev?: LinkInfo;
    current?: LinkInfo;
    next?: LinkInfo;
    last?: LinkInfo;
};
export default function parseLinkHeader(linkHeader: string): Links | null;
export {};
