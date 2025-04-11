export const YMapsQuery = {
    apikey: import.meta.env.VITE_YMAP_GEO_API_KEY,
    suggest_apikey: import.meta.env.VITE_YMAP_SUGGEST_API_KEY,
};

export const MapState = {
    style: {
        height: '350px',
        width: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
    },
    defaultState: { controls: ['zoomControl', 'fullscreenControl'] },
    modules: ['control.ZoomControl', 'control.FullscreenControl', 'control.RoutePanel'],
};
