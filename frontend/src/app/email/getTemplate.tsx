import RsvpSignUpEmail from "./RsvpSignUpEamil"
import {Event} from "../../types/Event"
import { render } from '@react-email/render';

export const getRsvpSignUpHTML = (event:Event) => {
    return render(<RsvpSignUpEmail event={event}/>)
}