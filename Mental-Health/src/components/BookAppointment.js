// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "../css/BookAppointment.css";

// const BookAppointment = () => {
//     const location = useLocation();
//     const professional = location.state?.professional; // Retrieve professional details

//     const [phone, setPhone] = useState("");
//     const [date, setDate] = useState("");
//     const [time, setTime] = useState("");
//     const [locationAddress, setLocationAddress] = useState("");
//     const [loading, setLoading] = useState(false);

    
//     const handleBookAppointment = async () => {
//         const trimmedPhone = phone.trim();
    
//         if (!trimmedPhone) {
//             alert("❌ Please enter a phone number.");
//             return;
//         }
    
//         if (!/^\+\d{10,15}$/.test(trimmedPhone)) {
//             alert("❌ Enter a valid phone number in international format (e.g., +91XXXXXXXXXX).");
//             return;
//         }
    
//         if (!professional) {
//             alert("❌ No professional selected. Please go back and choose one.");
//             return;
//         }
    
//         const appointmentDetails = {
//             consultantName: professional.name,
//             specialization: professional.specialization,
//             experience: professional.experience,
//             date: "2024-09-05",  // Replace with actual user input
//             time: "10:00 AM",     // Replace with actual user input
//             location: "Clinic XYZ, City Center",  // Replace with actual user input
//         };
    
//         console.log("📩 Sending to Backend:", { phone: trimmedPhone, appointmentDetails }); // ✅ Debugging log
    
//         try {
//             const response = await fetch("http://localhost:4000/send-message", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ phone: trimmedPhone, appointmentDetails }),
//             });
    
//             const result = await response.json();
//             if (result.success) {
//                 alert(`✅ Appointment confirmed with ${professional.name}! SMS sent.`);
//                 setPhone("");
//             } else {
//                 alert("❌ Error sending SMS: " + result.error);
//             }
//         } catch (error) {
//             alert("❌ Failed to book appointment. Please try again later.");
//             console.error("Error:", error);
//         }
//     };
    

//     return (
//         <div className="appointment-container">
//             <h2>Book Your Appointment</h2>

//             {professional ? (
//                 <div className="professional-details">
//                     <h3>{professional.name}</h3>
//                     <p><strong>Specialization:</strong> {professional.specialization}</p>
//                     <p><strong>Experience:</strong> {professional.experience}</p>
//                     <p><strong>Approach:</strong> {professional.approach}</p>
//                     <p><strong>Age:</strong> {professional.age}</p>
//                 </div>
//             ) : (
//                 <p>No professional selected.</p>
//             )}

//             <input
//                 type="text"
//                 placeholder="Enter phone number (+91XXXXXXXXXX)"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//             />
//             <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//             />
//             <input
//                 type="time"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Enter appointment location"
//                 value={locationAddress}
//                 onChange={(e) => setLocationAddress(e.target.value)}
//             />

//             <button onClick={handleBookAppointment} disabled={loading}>
//                 {loading ? "Booking..." : "Book Appointment"}
//             </button>
//         </div>
//     );
// };

// export default BookAppointment;









import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/BookAppointment.css";
import { useNavigate } from "react-router-dom";

const BookAppointment = () => {
    const location = useLocation();
    const professional = location.state?.professional; // Retrieve professional details

    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [locationAddress, setLocationAddress] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleBookAppointment = async () => {
        const trimmedPhone = phone.trim();

        if (!trimmedPhone) {
            alert("❌ Please enter a phone number.");
            return;
        }

        if (!/^\+\d{10,15}$/.test(trimmedPhone)) {
            alert("❌ Enter a valid phone number in international format (e.g., +91XXXXXXXXXX).");
            return;
        }

        if (!professional) {
            alert("❌ No professional selected. Please go back and choose one.");
            return;
        }

        const appointmentDetails = {
            consultantName: professional.name,
            specialization: professional.specialization,
            experience: professional.experience,
            date: date || "2024-09-05", // Default value if not provided
            time: time || "10:00 AM",
            location: locationAddress || "Clinic XYZ, City Center",
        };

        console.log("📩 Sending to Backend:", { phone: trimmedPhone, appointmentDetails });

        setLoading(true);

        try {
            const response = await fetch("http://localhost:4000/send-message", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone: trimmedPhone, appointmentDetails }),
            });

            const result = await response.json();
            if (result.success) {
                alert(`✅ Appointment confirmed with ${professional.name}! SMS sent.`);
                window.location.reload(); // Reload the page after booking
            } else {
                alert("❌ Error sending SMS: " + result.error);
            }
        } catch (error) {
            alert("❌ Failed to book appointment. Please try again later.");
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <div className="appointment-container">
            <h2>Book Your Appointment</h2>

            {professional ? (
                <div className="professional-details">
                    <h3>{professional.name}</h3>
                    <p><strong>Specialization:</strong> {professional.specialization}</p>
                    <p><strong>Experience:</strong> {professional.experience}</p>
                    <p><strong>Approach:</strong> {professional.approach}</p>
                    <p><strong>Age:</strong> {professional.age}</p>
                </div>
            ) : (
                <p>No professional selected.</p>
            )}

            <input
                type="text"
                placeholder="Enter phone number (+91XXXXXXXXXX)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter appointment location"
                value={locationAddress}
                onChange={(e) => setLocationAddress(e.target.value)}
            />

            <button onClick={handleBookAppointment} disabled={loading}>
                {loading ? "Booking..." : "Book Appointment"}
            </button>

            
        </div>

        <button
        onClick={() => navigate(-1)} // Navigate to the previous route
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "#FF5733",
          color: "white",
          padding: "10px 15px",
          borderRadius: "30px",
          textDecoration: "none",
          fontSize: "1rem",
          fontWeight: "bold",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          border: "none",
          cursor: "pointer",
        }}
      >
        Back
      </button>

        </>
    );
};

export default BookAppointment;
