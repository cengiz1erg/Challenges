import java.util.ArrayList;
import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;

class MyTree {  
    public static void main (String[] args) throws FileNotFoundException {       
        System.out.println("Sozluk Yukleniyor. Lutfen Bekleyin...");
        Scanner myObj = new Scanner(System.in);
        try {
            // Scanner scanner = new Scanner(new File("sozluk.txt"));
            Scanner scanner = new Scanner(new File(args[0]));                    
            ArrayList<String> listAll = new ArrayList<String>();           
            while (scanner.hasNext()){
                listAll.add(scanner.next());
            }
            scanner.close();
            System.out.println("Sozluk Yuklendi.");
            while(true){
                ArrayList<String> listMatches = new ArrayList<String>();
                System.out.println("Bir kelime yazp enter tusuna basiniz");   
                String wordInput = myObj.nextLine();         
                for (String word : listAll) {
                    if(word.contains(wordInput.toUpperCase())){
                        listMatches.add(word);
                    }
                }
                System.out.println("Olasi Kelimeler");
                for (String word : listMatches) {
                    System.out.println(word);
                }        
            }
        } catch (ArrayIndexOutOfBoundsException a) {
            System.out.println("Hata: Bir dosya temin etmelisiniz.");
        } catch (Exception e){
            System.out.println("Hata");
        } finally{
            myObj.close();
        }
    }
}