export default function Loading() {
    return (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-background">
            <div className="border-4 border-primary border-t-transparent rounded-full w-16 h-16 animate-spin" />
        </div>
    );
}
