import DeleteIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
// ----------------------------------------------------------------------

export default function UserMoreMenu({ edit, setValues, data }) {
  const handleEdit = () => {
    setValues(data);
  };

  return (
    <>
      <IconButton onclick={handleEdit}>
        <EditIcon />
      </IconButton>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </>
  );
}
