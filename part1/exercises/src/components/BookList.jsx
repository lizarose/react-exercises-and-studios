export default function BookList() {
   let pageTitle = "Book Titles Released This Week";
   let book1 = "https://th.bing.com/th/id/OIP.LWELQFyyqAdZ6xy0pHkjHQAAAA?rs=1&pid=ImgDetMain";
   let book2 = "https://th.bing.com/th/id/OIP.ASe4wcW_EJDOtThFCAMmRAAAAA?rs=1&pid=ImgDetMain";
   let book3 = "https://th.bing.com/th/id/OIP.RJ-y1xw0LkEaIFhHT7sjPAHaLW?rs=1&pid=ImgDetMain";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="King of Sloth by Ana Huang" />
         <img src={book2} alt="Powerful: A Powerless Story by Lauren Roberts" />
         <img src={book3} alt="Only the Brave: A Novel by Danielle Steel" />
      </div>      
   );
}