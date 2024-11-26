export default function Percentage({ size='max-w-32', value,  }): JSX.Element {

    return (
        <div className={`relative size-${size}`}>
            <svg
                className="size-full -rotate-90"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-gray-200 dark:text-neutral-700"
                    strokeWidth="2"
                ></circle>

                <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-green-600 dark:text-green-500"
                    strokeWidth="2"
                    strokeDasharray="100"
                    strokeDashoffset={100 - value }
                    strokeLinecap="round"
                ></circle>
            </svg>

            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <span className="text-center text-2xl font-bold text-green-600 dark:text-green-500">
                    <p className="font-bold" style={{fontSize:`${size*1.25}px`}}>{value}%</p>
                </span>
            </div>
        </div>
    );
}


