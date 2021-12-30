export const goToCart = (history) => {
  history.push("/cart");
};

export const goToLogin = (history) => {
  history.push("/login");
};

export const goToProfile = (history) => {
  history.push("/profile/:id");
};

export const goToAddress = (history) => {
  history.push("/endereço");
};

export const goToSearch = (history) => {
  history.push("/search");
};

export const goToSignUp = (history) => {
  history.push("/cadastro");
};

export const goToEdit = (history) => {
  history.push("/to-edit");
};
// export const goToFeed = (history) => {
//   history.push("/feed");

// };
export const goToBack = (history) => {
  history.goBack();
};

export const goToDetails = (history, restaurantId) => {
  history.push(`/restaurant/${restaurantId}`);
};

export const goToEditAddress = (history) => {
  history.push("/editarEndereco");
};
