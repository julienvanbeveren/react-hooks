export declare function useFetch<T>(url: string, options?: RequestInit): {
    loading: boolean;
    error: any;
    data: T | undefined;
};
