import { toast } from 'react-toastify';

export default function Toast({ message }) {
  toast["success"](
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1, fontSize: 15, padding: "8px 12px" }}>
        {message}
      </div>
    </div>
  )
}