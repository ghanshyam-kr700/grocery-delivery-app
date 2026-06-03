import { useState } from "react"
import type { Address } from "../types"


const Adresses = () => {

  const [address, setAddresses] = useState<Address[]>([])
  const [loading, setLoading] = useState(true)
  const [showFrom, setShow] = useState(false)
  const [editingId, seteditingId] = useState<string | null>(null)
  const [form, setShowForm] = useState({
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
    isDefault: false,
  });
  setShowForm(false)
  seteditingId(null)
};

  return (
    <div>Adresses</div>
  )
}

export default Adresses