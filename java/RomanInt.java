// B. Enter a Roman Number as input and convert it to an integer. (ex IX = 9)
public class RomanInt {
    static int value(char r)
    {
        if (r == 'I')
            return 1;
        if (r == 'V')
            return 5;
        if (r == 'X')
            return 10;
        if (r == 'L')
            return 50;
        if (r == 'C')
            return 100;
        if (r == 'D')
            return 500;
        if (r == 'M')
            return 1000;
        return -1;
    }
    public static void main(String args[]){
        String str = "IX";
        int res = 0;
        for(int i=0;i<str.length();i++){
            if(i>0 && value(str.charAt(i)) > value(str.charAt(i-1)))
                res+= value(str.charAt(i)) - 2* value(str.charAt(i-1));
            else
                res+=value(str.charAt(i));
        }
        System.out.println("The value of Roman literal " + str + " is " + res);
    }
}
