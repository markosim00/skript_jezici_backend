package main;

import com.komponente.skladista.LocalStorage;

public class Main {

    public static void main(String[] args) {
        if(args[0].equals("init") && args[1].equals("local")) {
            LocalStorage localStorage = new LocalStorage(args[2], args[3], args[4]);
        }
    }

}
