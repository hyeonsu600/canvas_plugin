export namespace initialState {
    let mode: string;
    let image: string;
    let imageName: string;
    let icon: string;
    let iconFillColor: string;
    let collectionOpen: boolean;
    let loading: boolean;
    let error: undefined;
    let cropperOpen: boolean;
    let cropperSettings: null;
    let compressed: boolean;
}
export namespace actions {
    namespace RESET_ALL {
        let type: string;
    }
    namespace SET_IMAGE {
        let type_1: string;
        export { type_1 as type };
    }
    namespace SET_IMAGE_NAME {
        let type_2: string;
        export { type_2 as type };
    }
    namespace SET_COMPRESSION_STATUS {
        let type_3: string;
        export { type_3 as type };
    }
    namespace CLEAR_IMAGE {
        let type_4: string;
        export { type_4 as type };
    }
    namespace SET_ICON {
        let type_5: string;
        export { type_5 as type };
    }
    namespace SET_ICON_FILL_COLOR {
        let type_6: string;
        export { type_6 as type };
    }
    namespace SET_IMAGE_COLLECTION_OPEN {
        let type_7: string;
        export { type_7 as type };
    }
    namespace START_LOADING {
        let type_8: string;
        export { type_8 as type };
    }
    namespace STOP_LOADING {
        let type_9: string;
        export { type_9 as type };
    }
    namespace CLEAR_MODE {
        let type_10: string;
        export { type_10 as type };
    }
    namespace UPDATE_SETTINGS {
        let type_11: string;
        export { type_11 as type };
    }
    namespace SET_CROPPER_OPEN {
        let type_12: string;
        export { type_12 as type };
    }
    namespace SET_CROPPER_SETTINGS {
        let type_13: string;
        export { type_13 as type };
    }
}
export namespace modes {
    namespace courseImages {
        let type_14: string;
        export { type_14 as type };
        export let label: string;
    }
    namespace uploadImages {
        let type_15: string;
        export { type_15 as type };
        let label_1: string;
        export { label_1 as label };
    }
    namespace singleColorImages {
        let type_16: string;
        export { type_16 as type };
        let label_2: string;
        export { label_2 as label };
    }
    namespace multiColorImages {
        let type_17: string;
        export { type_17 as type };
        let label_3: string;
        export { label_3 as label };
    }
}
export default imageSection;
declare function imageSection(state: any, action: any): any;
