import { IInterface } from "~/components";

export interface Cart extends IInterface {
	cartId: string;
	title: string;
	description: string;
	courseCount: string;
	course_duration: string;
}
