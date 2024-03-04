import ThemeToggle from '../components/ThemeToggle';
function Welcome() {

return(
    <body className="bg-white dark:bg-gradient-to-br from-gray-900 to-black">
    <div className="text-gray-900 dark:text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
    <h1 className="font-serif text-3xl font-medium">AITs</h1>
         <div className="flex justify-end">
            <div className="mr-8">
            <ThemeToggle/>
            </div>
            <div className=" mr-8">
            <a href="/SignIn"
                className="self-start px-3 py-2 leading-none text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-800 rounded-lg focus:outline-none hover:bg-slate-200 bg-gray-100 dark:bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
                Sign In
            </a>
            </div>
            <div>
            <a href="/SignUp"
                className="self-start px-3 py-2 leading-none dark:text-gray-200 border border-gray-300 dark:border-gray-800 rounded-lg focus:outline-none  hover:bg-slate-200 bg-gray-100 dark:bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
                Sign Up
            </a>
            </div>

        </div>
        <div className="h-32 md:h-40"></div>

        <p className="font-sans text-4xl font-bold dark:text-gray-200 max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
        your one-stop solution for AI-powered teaching assistants
        </p>
        <div className="h-10"></div>
        <p className="max-w-2xl font-serif text-xl dark:text-gray-400 md:text-2xl">
        Imagine a world where teachers have more time to focus on what matters most – inspiring and guiding their students.
        </p>

        <div className="h-32 md:h-40"></div>

        <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
                <p
                    className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
                    Simple and easy
                </p>
                <h2 className="text-4xl font-bold">Made for professor and student</h2>
                <div className="h-6"></div>
                <p className="font-serif text-xl dark:text-gray-400 md:pr-10">
                Whether you're a student seeking personalized support,
                 or a professor looking to enhance your teaching strategies,
                 our platform empowers personalized learning for all.
                </p>
                <div className="h-8"></div>
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
                    <div>
                        <p className="font-semibold dark:text-gray-400">Interacts seamlessly</p>
                        <div className="h-4"></div>
                        <p className="font-serif dark:text-gray-400">
                             with both text and voice, making learning as natural as conversation.
                        </p>
                    </div>
                    <div>
                        <p className="font-semibold dark:text-gray-400">Automated Quiz Generation:</p>
                        <div className="h-4"></div>
                        <p className="font-serif dark:text-gray-400">
                        Create customized quizzes to assess your
                        understanding and track your progress efficiently.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="-mr-24 rounded-lg md:rounded-l-full bg-slate-200 dark:bg-gradient-to-br from-gray-900 to-black h-96"></div>
            </div>
        </div>

        <div className="h-32 md:h-40"></div>

        <p className="font-serif text-4xl">
            <span className="dark:text-gray-600">AITs is more than just a platform – it's a personalized learning revolution.  </span>

        
        </p>

        <div className="h-32 md:h-40"></div>

        <div className="grid gap-4 md:grid-cols-3 text-gray-400">
            <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gray-200 dark:bg-gradient-to-br from-gray-900 to-black">
                <p
                    className="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14">
                    1
                </p>
                <div className="h-6"></div>
                <p className="font-serif text-3xl">Engaging 3D AI assistant that adapts to your learning style.</p>
            </div>
            <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gray-200 dark:bg-gradient-to-br from-gray-900 to-black">
                <p
                    className="flex items-center justify-center text-4xl font-semibold text-indigo-400 bg-indigo-800 rounded-full shadow-lg w-14 h-14">
                    2
                </p>
                <div className="h-6"></div>
                <p className="font-serif text-3xl">
                Empowers you to generate personalized quizzes that test your understanding and solidify your knowledge.
                </p>
            </div>
            <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gray-200 dark:bg-gradient-to-br from-gray-900 to-black">
                <p
                    className="flex items-center justify-center text-4xl font-semibold text-teal-400 bg-teal-800 rounded-full shadow-lg w-14 h-14">
                    3
                </p>
                <div className="h-6"></div>
                <p className="font-serif text-3xl">Detailed performance insights for professors.</p>
            </div>
        </div>

        <div className="h-40"></div>

        <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col justify-center md:col-span-2">
                <p
                    className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-600">
                    innovative
                </p>
                <h2 className="text-4xl font-bold">Revolutionize your educational experience with the future of learning</h2>
                <div className="h-6"></div>
                <p className="font-serif text-xl dark:text-gray-400 md:pr-10">
                 interactive 3D AI teacher assistants! Our innovative platform equips educators
                  with a powerful tool to personalize instruction, enhance engagement, and unlock student potential.
                </p>
                <div className="h-8"></div>
                <div className="grid gap-6 pt-8 border-t border-gray-800 lg:grid-cols-3">
                    <div>
                        <p className="font-semibold dark:text-gray-400">Providing personalized learning</p>
                        <div className="h-4"></div>
                        <p className="font-serif dark:text-gray-400">
                             Students receive individualized support, enhancing their understanding and confidence.
                        </p>
                    </div>
                    <div>
                        <p className="font-semibold dark:text-gray-400">Making learning accessible</p>
                        <div className="h-4"></div>
                        <p className="font-serif dark:text-gray-400">
                           Access education anytime, anywhere, from any device, at your own pace.
                        </p>
                    </div>
                    <div>
                        <p className="font-semibold dark:text-gray-400">Saving educators time</p>
                        <div className="h-4"></div>
                        <p className="font-serif dark:text-gray-400">
                              Automate tasks like quiz generation and grading,
                              allowing educators to focus on providing quality instruction.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="-mr-24 rounded-lg md:rounded-l-full bg-slate-200 dark:bg-gradient-to-br from-gray-900 to-black h-96"></div>
            </div>
        </div>

        <div className="h-10 md:h-40"></div>

        <div className="grid gap-4 md:grid-cols-4">
            <ul className="space-y-1 dark:text-gray-400">
                <li className="pb-4 font-serif dark:text-gray-400">Social networks</li>
                <li>
                    <a href="" className="hover:underline">Twitter</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Linkedin</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Facebook</a>
                </li>
            </ul>
            <ul className="space-y-1 dark:text-gray-400">
                <li className="pb-4 font-serif dark:text-gray-400">Company</li>
                <li>
                    <a href="#" className="hover:underline">The team</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">About us</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Our vision</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Join us</a>
                </li>
            </ul>
            <ul className="space-y-1 dark:text-gray-400">
                <li className="pb-4 font-serif dark:text-gray-400">Join</li>
                <li>
                    <a href="https://github.com/gary149/landing-gradients"
                        className="self-start px-3 py-2 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
                        Get this template
                    </a>
                </li>
            </ul>
        </div>
        <div className="h-12"></div>
    </div>
</body>
 )
}

export default Welcome;