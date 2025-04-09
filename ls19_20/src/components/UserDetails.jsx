export function UserDetails({ user }) {
    return (
      <div style={{ paddingLeft: "20px", color: "#444" }}>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
      </div>
    );
  }
  