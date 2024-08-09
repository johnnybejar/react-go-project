// Related to player information
type PlayerRank = {
    player_info: PlayerInfo;
    rank_info: RankInformation;
    class_rank_info: Record<number, ClassRankInfo>;
}
type PlayerInfo = {
    steamid: string;
    first_seen?: number;
    last_seen?: number;
    id: number;
    name: string;
    country?: string;
    country_code?: string;
}
type RankInformation = {
    total_ranked: number;
    points: number;
    rank: number;
}
type ClassRankInfo = {
    total_ranked: number;
    points: number;
    rank: number;
    title: string | null;
}
type PlayerStats = {
    player_info: PlayerInfo;
    rank_info: RankInformation;
    class_rank_info: Record<number, ClassRankInfo>;
    country_rank_info: CountryRankInfo;
    country_class_rank_info: CountryClassRankInfo;
    pr_stats: PrStats;
    wr_stats: WrStats;
    zone_count: ZoneCount;
}
type CountryRankInfo = {
    rank: number;
    total_ranked: number;
}
type CountryClassRankInfo = {
    rank: number;
    total_ranked: number;
}
type PrStats = {
    bonus: Record<string, number>;
    course: Record<string, number>;
    trick: Record<string, number>;
    map: Record<string, number>;
}
type WrStats = {
    bonus: Record<string, number>;
    course: Record<string, number>;
    trick: Record<string, number>;
    map: Record<string, number>;
}
type TopStats = {
    bonus: Record<string, number>;
    course: Record<string, number>;
    trick: Record<string, number>;
    map: Record<string, number>;
}
type ZoneCount = {
    special: Record<string, number>;
    checkpoint: Record<string, number>;
    bonus_end: Record<string, number>;
    linear: Record<string, number>;
    bonus: Record<string, number>;
    course: Record<string, number>;
    course_end: Record<string, number>;
    trick: Record<string, number>;
    map_end: Record<string, number>;
    map: Record<string, number>;
    misc: Record<string, number>;
}

// Related to maps
type PlayerMapCompletion = {
    zone_info: ZoneInfo;
    tier_info: Record<string, number>;
    completion_info: Record<string, number>;
    result: PlayerMapInfo;
}
type PlayerMapInfo = {
    zone_id: number;
    class: number;
    demo_info: DemoInfo;
    user_id: number;
    steamid: string;
    player_info: PlayerInfo;
    id: number;
    duration: number;
    date: number;
    name: string;
    rank: number;
}
type DemoInfo = {
    id: number;
    start_tick: number;
    end_tick: number;
    url: string;
    server_info: Record<string, unknown>;
}
type ZoneInfo = {
    id: number;
    map_id: number;
    zoneindex: number;
    custom_name: string | null;
    type: string;
}
type MapOverview = {
    map_info: Record<string, unknown>;
    tier_info: Record<string, number>;
    soldier_runs: SoldierRun[];
    demoman_runs: DemomanRun[];
    zone_counts: Record<string, number>;
    videos: Record<string, string>;
    authors: Authors[];
}
type SoldierRun = {
    user_id: number;
    steamid: string;
    id: number;
    duration: number;
    date: number;
    name: string;
}
type DemomanRun = {
    user_id: number;
    steamid: string;
    id: number;
    duration: number;
    date: number;
    name: string;
}

// Related to searching
type SearchResults = {
    players: PlayerInfo[];
    maps: unknown[];
}
// May go unused
type Authors = {
    user_id: number;
    steamid: string;
    user_name: string;
    map_count: number;
    name: string;
    id: number;
}