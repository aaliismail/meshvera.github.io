import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";
import { cn } from "../../lib/utils";
import { CheckIcon, ArrowRightIcon } from "lucide-react";

const steps = [
    { id: 1, label: "Company Name", field: "companyName", placeholder: "Your company name" },
    { id: 2, label: "Contact Name", field: "contactName", placeholder: "Your full name" },
    { id: 3, label: "Email", field: "email", placeholder: "you@company.com", type: "email" },
    { id: 4, label: "Phone", field: "phone", placeholder: "(555) 123-4567", type: "tel" },
    { id: 5, label: "Number of Workstations", field: "workstations", placeholder: "e.g., 10", type: "number" },
    { id: 6, label: "Biggest IT Frustration", field: "frustration", placeholder: "What brings you here?" },
];

export function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [isComplete, setIsComplete] = useState(false);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsComplete(true);
            console.log("Form submitted:", formData);
        }
    };

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const currentStepData = steps[currentStep];
    const progress = ((currentStep + 1) / steps.length) * 100;

    if (isComplete) {
        return (
            <div className="w-full max-w-md">
                <div className="bg-white p-12 rounded-lg border border-slate-200">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                            <CheckIcon className="h-8 w-8 text-white" strokeWidth={2.5} />
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-navy-950 mb-2">We'll be in touch soon</h2>
                            <p className="text-slate-600">
                                Thank you, {formData.contactName} from {formData.companyName}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md">
            {/* Simple progress bar */}
            <div className="mb-12">
                <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-blue-600 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">
                    Step {currentStep + 1} of {steps.length}
                </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
                <div className="space-y-6">
                    <div>
                        <Label htmlFor={currentStepData.field} className="text-lg font-semibold text-navy-950 mb-3 block">
                            {currentStepData.label}
                        </Label>
                        <Input
                            id={currentStepData.field}
                            type={currentStepData.type || "text"}
                            placeholder={currentStepData.placeholder}
                            value={formData[currentStepData.field] || ""}
                            onChange={(e) => handleInputChange(currentStepData.field, e.target.value)}
                            autoFocus
                            className="h-12 text-base bg-white border-slate-300 focus-visible:border-blue-600 focus-visible:ring-blue-600/20"
                        />
                    </div>

                    <div className="flex gap-3 pt-4">
                        {currentStep > 0 && (
                            <Button
                                onClick={() => setCurrentStep(currentStep - 1)}
                                variant="outline"
                                className="flex-1"
                            >
                                Back
                            </Button>
                        )}
                        <Button
                            onClick={handleNext}
                            disabled={!formData[currentStepData.field]?.toString().trim()}
                            className={cn("flex-1", currentStep === 0 && "w-full")}
                        >
                            {currentStep === steps.length - 1 ? "Complete" : "Continue"}
                            <ArrowRightIcon className="ml-2 h-4 w-4" strokeWidth={2} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
