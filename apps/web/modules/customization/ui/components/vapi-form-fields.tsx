import { UseFormReturn } from "react-hook-form";
import { FormSchema } from "../../types";
import { useVapiAssistants, useVapiPhoneNumbers } from "@/modules/plugins/hooks/use-vapi-data";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@workspace/ui/components/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@workspace/ui/components/select";

interface VapiFormFieldsProps {
 form: UseFormReturn<FormSchema>;
} 

export const VapiFormFields = ({
    form,
}: VapiFormFieldsProps) => {
    const { data: assistant, isLoading: assistantIsLoading } = useVapiAssistants();
    const { data: phoneNumbers, isLoading: phoneNumbersIsLoading } = useVapiPhoneNumbers();
    
    const disabled = form.formState.isSubmitting;

    return (
        <>
        <FormField
                control={form.control}
                name="vapiSettings.assistantId"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Voice Assistant</FormLabel>
                        <Select 
                         disabled={assistantIsLoading || disabled}
                         onValueChange={field.onChange}
                         value={field.value}
                         >
                            <FormControl>
                                <SelectTrigger>
                                   <SelectValue 
                                     placeholder={
                                        assistantIsLoading 
                                        ? "Loading assistants..."
                                        : "Select an assistant"
                                     }
                                   />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                               <SelectItem value="none">None</SelectItem> 
                               {assistant.map((assistant)=>(
                                <SelectItem 
                                key={assistant.id} value={assistant.id}>
                                    {assistant.name || "Unnamed Assistant"}
                                    {assistant.model?.model || "Unknown model"}
                                </SelectItem>
                               ))}
                            </SelectContent>
                        </Select> 
                        <FormDescription>
                            The Vapi assistant to use for voice calls
                        </FormDescription>                           
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="vapiSettings.phoneNumber"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Display Phone Number</FormLabel>
                        <Select 
                         disabled={phoneNumbersIsLoading || disabled}
                         onValueChange={field.onChange}
                         value={field.value}
                         >
                            <FormControl>
                                <SelectTrigger>
                                   <SelectValue 
                                     placeholder={
                                        phoneNumbersIsLoading 
                                        ? "Loading phone numbers..."
                                        : "Select a phone number"
                                     }
                                   />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                               <SelectItem value="none">None</SelectItem> 
                               {phoneNumbers.map((phoneNumber)=>(
                                <SelectItem 
                                key={phoneNumber.id} value={phoneNumber.number || phoneNumber.id}>
                                    {phoneNumber.number || "Unknown"} -{" "}
                                    {phoneNumber.name || "Unnamed"}
                                </SelectItem>
                               ))}
                            </SelectContent>
                        </Select> 
                        <FormDescription>
                            Phone number to display in the widget
                        </FormDescription>                           
                    </FormItem>
                )}
                />
        </>
    )

}