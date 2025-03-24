import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, datasets }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dataset
                </h2>
            }
        >

            <Head title="Dataset">
                <meta name="description" content="Datasets Index" />
            </Head>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    {datasets.data.map((dataset) => {
                            return(

                                <div key={dataset.id}>
                                <div className="font-semibold">
                                    {dataset.user.name}
                                </div>
                                <p className="mt-1">{dataset.title}</p>
                                <p className="mt-1">{dataset.description}</p>
                                </div>
                            //     <div className="p-6 text-gray-900" key={(post.id)}>
                            //     {post.body}
                            // </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
