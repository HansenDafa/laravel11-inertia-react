import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, posts }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Posts
                </h2>
            }
        >
            <Head title="Post">
                <meta name="description" content="Posts Index" />
            </Head>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        {posts.data.map((post) => {
                            return(

                                <div key={post.id}>
                                <div className="class font-semibold">
                                    {post.user.name}
                                </div>
                                <p className="class mt-1">{post.body}</p>
                                </div>
                            //     <div className="p-6 text-gray-900" key={(post.id)}>
                            //     {post.body}
                            // </div>
                            )
                        })};

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
