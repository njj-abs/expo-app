import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      marginVertical: theme.spacing.lg,
    },
  }));

export default useStyles