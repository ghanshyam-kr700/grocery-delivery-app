import { useEffect, useState } from "react"
import type { Address } from "../types";
import { dummyAddressData } from "../assets/assets"
import { MapIcon, PlusIcon } from "lucide-react"
import Loading from "../Components/Loading";
import AdressCard from "../Components/AdressCard";
import AdressForm from "../Components/AdressForm"; 

const Adresses = () => {

    const [addresses, setAddresses] = useState<Address[]>([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [form, setForm] = useState({
        label: "",
        address: "",   
        city: "",
        state: "",
        zip: "",
        isDefault: false
    })

    const resetForm = () => {
        setForm({
            label: "",
            address: "",   
            city: "",
            state: "",
            zip: "",
            isDefault: false
        });
        setShowForm(false)
        setEditingId(null)
    }

    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const onEditHandler = (add: Address) => {
        setForm({
            label: add.label,
            address: add.address,   // ✅ Fix 1
            city: add.city,
            state: add.state,
            zip: add.zip,
            isDefault: add.isDefault
        });
        setEditingId(add._id)
        setShowForm(true)
    }

    useEffect(() => {
        setAddresses(dummyAddressData);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="min-h-screen bg-app-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-semibold text-app-green">My Adresses</h1>
                    <button
                        onClick={() => { resetForm(); setShowForm(true) }}
                        className="px-4 py-2 bg-app-green text-white text-sm font-semibold rounded-xl hover:bg-app-green-light transition-colors flex items-center gap-2"
                    >
                        <PlusIcon className="size-4" />
                    </button>
                </div>

                {showForm && (
                    <AdressForm
                        resetForm={resetForm}
                        handleSubmit={handleSubmit}
                        form={form}
                        setForm={setForm}
                        editingId={editingId}
                    />
                )}

                {loading ? (
                    <Loading />
                ) : addresses.length === 0 ? (
                    <div className="text-center py-16">
                        <MapIcon className="size-16 text-app-border mx-auto mb-4" />
                        <h2 className="text-lg font-semibold text-app-green mb-2">No adresses saved</h2>
                        <p className="text-sm text-app-text-light">Add an adress for faster checkout</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {addresses.map((addr) => (
                            <AdressCard
                                key={addr._id}
                                addr={addr}
                                onEditHandler={onEditHandler}
                                setAddresses={setAddresses}
                            />
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}

export default Adresses