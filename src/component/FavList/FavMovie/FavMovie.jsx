// import { Card, Button } from "react-bootstrap";
// import swal from "sweetalert";

// // export default function FavMovie({ movie, getFavMovie }) {
// //   function handelDelete(id) {
// //     swal({
// //       title: "Are you sure?",
// //       text: "Once deleted, you will not be able to recover this imaginary file!",
// //       icon: "warning",
// //       buttons: true,
// //       dangerMode: true,
// //     }).then((willDelete) => {
// //       if (willDelete) {
// //         swal("Poof! Your imaginary file has been deleted!", {
// //           icon: "success",
// //         });
// //         const url = `${process.env.REACT_APP_SERVER}/deleteFavmovie/${id}`;
// //         const response = fetch(url, {
// //           method: "DELETE", // *GET, POST, PUT, DELETE, etc
// //         }).then(() => {
// //           // we recall the getFavMovie to get the data from the server again after deleting and
// //           // it will rernder the component because it is modifying the state
// //           getFavMovie();
// //         });
// //       } else {
// //         swal("Your imaginary file is safe!");
// //       }
// //     });
// //   }

// //   return (
// //     <Card style={{ width: "18rem" }}>
// //       <Card.Img variant="top" src={movie.image} />
// //       <Card.Body>
// //         <Card.Title> Title: {movie.title}</Card.Title>
// //         <Button onClick={() => handelDelete(movie.id)} variant="primary">
// //           Delete
// //         </Button>
// //       </Card.Body>
// //     </Card>
// //   );
// // }