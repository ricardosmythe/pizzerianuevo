export interface Feedback{
	firstname: string;
	lastname: string;
	telnum: string;
	email: string;
	contacttype: string;
	message: string;
	agree: boolean;
}

ContactType=['None','Tel','Email'];