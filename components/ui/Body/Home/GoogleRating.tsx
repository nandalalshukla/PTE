import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export default function GoogleRating() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Rating
        name="google-rating"
        value={4.8}
        precision={0.1}
        readOnly
        icon={
          <StarIcon
            style={{
              fontSize: "50px",
              color: "#FFD700",
            }}
          />
        }
        emptyIcon={
          <StarIcon
            style={{
              fontSize: "49px",
              color: "transparent",
              stroke: "#FFD700",
              strokeWidth: 1,
            }}
          />
        }
      />
      <span style={{ fontSize: "22px", color: "#FFD700" }}>4.9</span>
    </div>
  );
}
