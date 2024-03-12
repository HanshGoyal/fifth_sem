import java.io.*;
import java.net.*;

public class ContentsClient {
    public static void main(String[] args) throws Exception {
        Socket sock = new Socket("127.0.0.1", 4000);

        // Reading the file name from keyboard. Uses input stream
        System.out.print("Enter the file name: ");
        BufferedReader keyRead = new BufferedReader(new InputStreamReader(System.in));
        String fname = keyRead.readLine();

        // Sending the file name to server. Uses PrintWriter
        OutputStream ostream = sock.getOutputStream();
        PrintWriter pwrite = new PrintWriter(ostream, true);
        pwrite.println(fname);

        // Receiving the contents from server. Uses input stream
        InputStream istream = sock.getInputStream();
        BufferedReader socketRead = new BufferedReader(new InputStreamReader(istream));
        String str;
        while ((str = socketRead.readLine()) != null) { // Reading line-by-line
            System.out.println(str);
        }

        pwrite.close();
        socketRead.close();
        keyRead.close();
        sock.close();
    }
}
