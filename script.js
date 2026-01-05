document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const bookingId = "VS-" + Math.floor(Math.random() * 100000);

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("Vibe Salon & Barber", 20, 20);

    doc.setFontSize(14);
    doc.text("More Than a Cut. It’s a Vibe.", 20, 30);
    doc.text(`Booking ID: ${bookingId}`, 20, 50);
    doc.text(`Name: ${name}`, 20, 60);
    doc.text(`Appointment Date: ${date}`, 20, 70);
    doc.text("Location: Jagna, Bohol, Philippines", 20, 90);

    doc.save(`VibeSalon_${bookingId}.pdf`);
  });
});
