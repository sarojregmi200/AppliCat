import { Metadata } from "next";
import Link from "next/link";
import UserAuthForm from "@/components/forms/user-auth-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Authentication",
    description: "Authenticate to continue to Applicat",
    robots: {
        index: false,
        follow: false,
    },
};

export default function AuthenticationPage() {
    return (
        <div className="relative flex-col items-center justify-center h-screen md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative flex-col hidden h-full p-10 text-white bg-muted dark:border-r lg:flex">
                <div className="absolute inset-0 bg-zinc-900" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    AppliCat
                </div>
                <div className="middleSection"></div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            Get purrsonalized guidance with AppliCat.
                        </p>
                        <footer className="text-sm">- Car</footer>
                    </blockquote>
                </div>
            </div>
            <div className="flex items-center h-full p-4 lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Sign in with Google
                        </h1>
                    </div>
                    <UserAuthForm />
                    <p className="px-8 text-sm text-center text-muted-foreground">
                        By signing in, you agree to our &nbsp;
                        <a
                            href="/terms_of_service"
                            target="_blank"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Terms of Service
                        </a>
                        &nbsp; and &nbsp;
                        <a
                            href="/privacy_policy"
                            target="_blank"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Privacy Policy
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
