import {FilterTemplate} from "./template_spec";
import {FilterSpec, NumericalFilterSpecValue} from "./filter_spec";

export function getRegisteredTemplates(): FilterTemplate[] {
    return HardcodedTemplates
}

const HardcodedTemplates: FilterTemplate[] = [
    PredefinedTemplates.LargeClusterJewel
]

const PredefinedTemplates = {
    LargeClusterJewel: {
        readableName: "Large Cluster Jewel",
        isStatFilter: true,
        filterSpecs: [
            {
                readableName: "Adds # Passive Skills",
                isStatFilter: true,
                statSubcategory: "enchant",
                presetValue: new NumericalFilterSpecValue(undefined, "8")
            }
        ]
    } as FilterSpec

    Ele
}