import { compareAsc } from "date-fns";
import { consultingSession } from "../models/sessionModel";
import ConnectToDB from "../mongoose";

interface getSessionInfoForSideBarProps {
    userType?: "Consultant" | "Applicant" | null;
    userId?: string | null;
}

export const getSessionInfoForSideBar = async (props: getSessionInfoForSideBarProps): Promise<{
    totalSessions: number,
    totalIncome?: number,
}> => {
    await ConnectToDB();

    if (!props.userId || !props.userType || (props.userType !== "Consultant" && props.userType !== "Applicant"))
        return {
            totalSessions: 0,
            totalIncome: 0
        }

    if (props.userType === "Consultant") {
        const sessionData = await consultingSession.find({
            consultant: props.userId
        });

        return {
            totalSessions: sessionData?.length || 0,
            totalIncome: sessionData?.length > 0
                ? sessionData.reduce((total, sessionData) => total + sessionData.sessionCharge)
                : 0
        }
    }


    const sessionData = await consultingSession.find({ applicant: props.userId });
    return {
        totalSessions: sessionData?.length || 0,
    }
}

interface getSessionsProps {
    userId: string,
    userType: "Consultant" | "Applicant" | null;
    delimeter: "upcoming" | "previous",
    date: Date,
}
export interface Tsession {
    applicant: string,
    consultant: string,
    sessionType: string,
    status: "pending" | "confirmed",
    sessionCharge: number,
    sessionDuration: number,
    date: string,
    time: string,
}

export const getConsultingSessions = async (props: getSessionsProps): Promise<Tsession[]> => {
    try {
        if (!props.userId || !props.delimeter || !props.userType || props.userType && !["Consultant", "Applicant"].includes(props.userType)) {
            throw new Error("Invalid props cannot get user sessions")
        }
        const sessions: Tsession[] = await consultingSession.find({ [props.userType.toLowerCase()]: props.userId });

        const filteredSessions = sessions.filter((session) => {
            const timeSplit = session.time.split(":");
            const dateWithTime = new Date(session.date).setHours(parseInt(timeSplit[0]), parseInt(timeSplit[1]), 0, 0);
            return props.delimeter === "previous"
                ? compareAsc(dateWithTime, props.date)
                : compareAsc(props.date, dateWithTime) && session.status === "confirmed"
        })

        return filteredSessions;
    } catch (e) {
        console.log(e);
        return [];
    }

}
