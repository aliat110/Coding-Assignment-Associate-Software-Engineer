// C. Check if the input is pangram or not. (Pangram is a sentence that contains all the alphabet from a-z)
import java.util.Arrays;

public class StringPangram {

    static boolean isPangram(String str){
        if(str == null)
            return false;
        int ALPHABET_COUNT = 26;
        Boolean[] alphabets = new Boolean[ALPHABET_COUNT];
        Arrays.fill(alphabets,false);
        int index = 0;
        str = str.toUpperCase();
        for(int i=0;i<str.length();i++){
            if('A'<=str.charAt(i) && str.charAt(i)<='Z'){
                index = str.charAt(i) - 'A';
                alphabets[index] = true;
            }
        }
        for(boolean x:alphabets){

            if(!x)
                return false;
        }
        return true;
    }
    public static void main(String args[]){
        String str = "Abcdefghijklmnopqrstuvwxyz";
        System.out.println("String entered is \""+str + "\"");
        if(isPangram(str))
            System.out.println("Given string is a pangram");
        else
            System.out.println("Given string is not a pangram");
    }
}
