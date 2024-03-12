import java.io.*;
import java.net.*;

public class ContentsServer {
    public static void main(String args[]) throws Exception {
        // Establishing the connection with the server
        ServerSocket sersock = new ServerSocket(4000);
        System.out.println("Server ready for connection");
        Socket sock = sersock.accept(); // Binding with port: 4000
        System.out.println("Connection is successful and waiting for chatting");

        // Reading the file name from client InputStream
        InputStream istream = sock.getInputStream();
        BufferedReader fileRead = new BufferedReader(new InputStreamReader(istream));
        String fname = fileRead.readLine();

        // Reading file contents
        BufferedReader contentRead = new BufferedReader(new FileReader(fname));

        // Keeping output stream ready to send the contents
        OutputStream ostream = sock.getOutputStream();
        PrintWriter pwrite = new PrintWriter(ostream, true);
        String str;

        // Reading line-by-line from file
        while ((str = contentRead.readLine()) != null) {
            pwrite.println(str); // Sending each line to client
        }

        sock.close();
        sersock.close(); // Closing network sockets
        pwrite.close();
        fileRead.close();
        contentRead.close();
    }
}
