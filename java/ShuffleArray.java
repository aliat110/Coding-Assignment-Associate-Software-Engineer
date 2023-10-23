// A. Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.

import java.util.Arrays;
import java.util.Random;

public class ShuffleArray {

    static void shuffle(int arr[], int n) {
        // Using random class
        Random r = new Random();
        for (int i = n - 1; i > 0; i--) {
            // Generate a random integer from 0 to i
            int j = r.nextInt(i + 1);
            //Swapping
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        System.out.println(Arrays.toString(arr));
    }

    public static void main(String[] args) {
        int arr[] = { 1, 2, 3, 4, 5, 6, 7 };
        int n = arr.length;
        shuffle(arr, n);

    }
}