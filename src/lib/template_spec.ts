import {FilterSpec, FilterSpecValue} from "./filter_spec";

export interface FilterTemplate extends FilterSpec {
    readableName: string;
    filterSpecs: FilterSpec[];
    isStatFilter: boolean;

    with(other: FilterTemplate): FilterTemplate 
}